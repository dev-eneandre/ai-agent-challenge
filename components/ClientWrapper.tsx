"use client";

import { SchematicProvider } from "@schematichq/schematic-react";
import { ClerkProvider } from "@clerk/nextjs";
import SchematicWrapped from "./SchematicWrapped";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // check if env exists 
  const schematicPubKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY;
  if(!schematicPubKey){
    throw new Error(
      "No Wschematic Publishable key found, please add it in your .env.local file"
    )
  }
  return (
    <ClerkProvider>
      <SchematicProvider publishableKey={schematicPubKey}>
        <SchematicWrapped>
        {children}
        </SchematicWrapped>
      </SchematicProvider>
    
    </ClerkProvider>
  );
}
