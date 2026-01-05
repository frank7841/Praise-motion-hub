'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateTopicsAction } from './actions';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';

const formSchema = z.object({
  blogPosts: z.string().min(20, {
    message: 'Please provide at least 20 characters of blog post content.',
  }),
  trendingThemes: z.string().min(3, {
    message: 'Please provide at least one trending theme.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContentSuggestionPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedTopics, setSuggestedTopics] = useState<string[] | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      blogPosts: '',
      trendingThemes: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setSuggestedTopics(null);

    const blogPosts = values.blogPosts.split('\n').filter(Boolean);
    const trendingThemes = values.trendingThemes.split('\n').filter(Boolean);

    const response = await generateTopicsAction({ blogPosts, trendingThemes });

    if (response.success && response.data) {
      setSuggestedTopics(response.data.topics);
      toast({
        title: 'Success!',
        description: 'New devotional topics have been generated.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'An Error Occurred',
        description: response.error || 'Could not generate topics. Please try again.',
      });
    }

    setIsLoading(false);
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">AI Content Suggestions</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="blogPosts"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recent Blog Posts</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste recent blog post content here. Separate posts with a new line."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Provide content from recent blog posts to analyze themes.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="trendingThemes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Trending Musical Themes</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Hope in darkness, Unconditional love, The sound of revival..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      List current trending themes in worship music.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Generate Topics
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Suggested Topics</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          {!isLoading && suggestedTopics && (
            <ul className="space-y-3 list-disc list-inside">
              {suggestedTopics.map((topic, index) => (
                <li key={index} className="text-lg">{topic}</li>
              ))}
            </ul>
          )}
          {!isLoading && !suggestedTopics && (
            <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-64">
              <Wand2 className="h-12 w-12 mb-4" />
              <p>Your AI-generated devotional topics will appear here.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
