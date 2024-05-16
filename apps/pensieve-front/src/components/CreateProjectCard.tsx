'use client';

import { useCreateProject } from '@/api/project';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PROJECT_VALIDATION_MSG } from '@/config/responseMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon } from 'lucide-react';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { AutosizeTextarea } from './ui/autosize-textarea';

interface CreateProjectCardI {
  refetch: () => void;
}

const CreateProjectCard: FC<CreateProjectCardI> = ({ refetch }) => {
  const [dialogOpened, setDialogOpened] = React.useState(false);
  const formSchema = z.object({
    projectName: z.string().min(1, {
      message: PROJECT_VALIDATION_MSG.PROJECT_NAME_REQ,
    }),
    projectDescription: z.string().min(1, {
      message: PROJECT_VALIDATION_MSG.PROJECT_DESCRIPTION_REQ,
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: '',
      projectDescription: '',
    },
  });

  const { mutate } = useCreateProject({
    onSuccess: () => {
      form.reset();
      form.clearErrors();
      setDialogOpened(false);
      refetch();
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  return (
    <Dialog open={dialogOpened} onOpenChange={setDialogOpened}>
      <DialogTrigger asChild>
        <div className="w-full h-full border border-dashed border-slate-900 rounded-md flex flex-col items-center justify-around hover:bg-slate-50 min-h-[270px]">
          <div className="flex items-center flex-col">
            <div className="w-fit h-fit rounded-full border border-slate-500 border-dashed p-4 mb-4">
              <PlusIcon color="gray" size={32} />
            </div>
            <p className="text-lg text-center text-slate-600">Create a new project</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project name</FormLabel>
                  <FormControl>
                    <Input placeholder="Awesome Project" {...field} />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Be creative and let it reflect the essence of your idea.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <AutosizeTextarea placeholder="Make something awesome!" {...field} />
                  </FormControl>
                  <FormDescription className="text-xs">Share a brief description of your project.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="w-full flex justify-end">
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectCard;
