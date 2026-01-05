'use server';

import { generateDevotionalTopics, type GenerateDevotionalTopicsInput, type GenerateDevotionalTopicsOutput } from '@/ai/flows/generate-devotional-topics';
import { z } from 'zod';

const ActionResponseSchema = z.object({
  success: z.boolean(),
  data: GenerateDevotionalTopicsOutputSchema.nullable(),
  error: z.string().nullable(),
});

type ActionResponse = z.infer<typeof ActionResponseSchema>;

export async function generateTopicsAction(input: GenerateDevotionalTopicsInput): Promise<ActionResponse> {
  try {
    const output = await generateDevotionalTopics(input);
    return { success: true, data: output, error: null };
  } catch (e) {
    console.error("Error in generateTopicsAction:", e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred during topic generation.';
    return { success: false, data: null, error: errorMessage };
  }
}
