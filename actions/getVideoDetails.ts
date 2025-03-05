"use server";

import { google } from "googleapis";
import { VideoDetails } from "@/types";

const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
});

export async function getVideoDetails(videoId: string) {
  console.log("fetcung video details for:", videoId);

  try {
    // fetch video ddetails and channel details
    const videoResponse = await youtube.videos.list({
      part: ["statistics", "snippet"],
      id: [videoId],
    });

    const videoDetails = videoResponse.data.items?.[0];

    if (!videoDetails) throw new Error("Video not found");

    // get channel details including thumbnail
    const channelResponse = await youtube.channels.list({
      part: ["snippet", "statistics"],
      id: [videoDetails.snippet?.channelId || ""],
      key: process.env.YOUTUBE_API_KEY,
    });

    const channelDetails = channelResponse.data.items?.[0];

    console.log("video details fetched successfully ");

    const video: VideoDetails = {
      // Video info
      title: videoDetails.snippet?.title || "Unknown title",
      thumbnail:
        videoDetails.snippet?.thumbnails?.maxres?.url ||
        videoDetails.snippet?.thumbnails?.high?.url ||
        videoDetails.snippet?.thumbnails?.default?.url ||
        "",

      publishedAt:
        videoDetails.snippet?.publishedAt || new Date().toISOString(),

      // Video Metics
      views: videoDetails.statistics?.viewCount || "0",
      likes: videoDetails.statistics?.likeCount || "Not Available",
      comments: videoDetails.statistics?.commentCount || "Not Available",

      // Channel Info
      channel: {
        title: videoDetails.snippet?.channelTitle || "",
        thumbnail: channelDetails?.snippet?.thumbnails?.default?.url || "",
        subscribers: channelDetails?.statistics?.subscriberCount || "0",
      },
    };
    console.log(video);
    return video;
  } catch (error) {
    console.error("Error fetching vifeo details", error);
    return null;
  }
}

// GET YOUTUBE VIDEO DETAILS
