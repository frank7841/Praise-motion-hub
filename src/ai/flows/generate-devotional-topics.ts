'use server';
/**
 * @fileOverview Generates devotional topics based on recent blog posts and trending musical themes.
 *
 * - generateDevotionalTopics - A function that generates devotional topics.
 * - GenerateDevotionalTopicsInput - The input type for the generateDevotionalTopics function.
 * - GenerateDevotionalTopicsOutput - The return type for the generateDevotionalTopics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDevotionalTopicsInputSchema = z.object({
  blogPosts: z.array(z.string()).describe('Recent blog posts content.'),
  trendingThemes: z.array(z.string()).describe('Trending musical themes.'),
});
export type GenerateDevotionalTopicsInput = z.infer<typeof GenerateDevotionalTopicsInputSchema>;

const GenerateDevotionalTopicsOutputSchema = z.object({
  topics: z.array(z.string()).describe('A list of suggested devotional topics.'),
});
export type GenerateDevotionalTopicsOutput = z.infer<typeof GenerateDevotionalTopicsOutputSchema>;

export async function generateDevotionalTopics(
  input: GenerateDevotionalTopicsInput
): Promise<GenerateDevotionalTopicsOutput> {
  return generateDevotionalTopicsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDevotionalTopicsPrompt',
  input: {schema: GenerateDevotionalTopicsInputSchema},
  output: {schema: GenerateDevotionalTopicsOutputSchema},
  prompt: `You are a devotional content creation expert.

  Based on the following recent blog posts and trending musical themes, suggest some devotional topics.

  Recent Blog Posts:
  {{#each blogPosts}}
  - {{{this}}}
  {{/each}}

  Trending Musical Themes:
  {{#each trendingThemes}}
  - {{{this}}}
  {{/each}}

  Please provide a list of devotional topics that would resonate with our audience:
  `,
});

const generateDevotionalTopicsFlow = ai.defineFlow(
  {
    name: 'generateDevotionalTopicsFlow',
    inputSchema: GenerateDevotionalTopicsInputSchema,
    outputSchema: GenerateDevotionalTopicsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
