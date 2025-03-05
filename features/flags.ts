export enum FeatureFlag {
  TRANSCRIPTION = "transcription",
  IMAGE_GENERATION = "image-generation",
  ANALYSE_VIDEO = "analyse-video",
  TITLE_GENERATIONS = "title-generations",
  SCRIPT_GENERATION = "script-generation",
  ANALYZE_VIDEO = "video",
}

export const featureFlagEvents: Record<FeatureFlag, { event: string }> = {
  [FeatureFlag.TRANSCRIPTION]: {
    event: "transcribe",
  },
  [FeatureFlag.IMAGE_GENERATION]: {
    event: "generate-image",
  },
  [FeatureFlag.ANALYSE_VIDEO]: {
    event: "analyse-video",
  },
  [FeatureFlag.ANALYZE_VIDEO]: {
    event: "video",
  },
  [FeatureFlag.TITLE_GENERATIONS]: {
    event: "generate-title",
  },
  [FeatureFlag.SCRIPT_GENERATION]: {
    event: "",
  },
};
