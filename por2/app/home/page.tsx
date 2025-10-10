"use client"
import { Analytics } from "@vercel/analytics/next"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Image from "next/image";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Too short (min 2)").max(100, "Too long (max 100)"),
  email: z.string().email(),
  message: z.string().min(2, "Too short (min 2)").max(500, "Too long (max 500)"),
});

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  
async function onSubmit(values: z.infer<typeof formSchema>) {
  // console.log(values);
  const info = {
    access_key: "cf7c2ab3-4f37-4146-a245-244736953d2c",
    senderName: values.name,
    senderEmail: values.email,
    senderMessage: values.message,
    subject: "New Message From Portfolio Website"
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(info),
  });

    const data = await response.json();

    if(response.ok && data.success) {
      alert("Message sent!");
      form.reset();
    }else { 
      alert(`Failed to send email: ${data.message || "Unknown error"}`);
    }

  }catch (error: any) {
      alert(`Error sending email: ${error.message || error}`);
    }
  }



return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Smith" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johnsmith@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea className="max-h-10 resize-y overflow-y-auto" placeholder="Your message here (500 char limit)." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>Send</Button>
      </form>
    </Form>
  )
}

export default function Home() {
  return (
      <main className="flex flex-col row-start-2 items-center sm:items-start min-h-0">
        {/* div for big card */}
        <div className="flex flex-row gap-10 justify-center [perspective:1800px] min-h-0 h-full">
          {/* fixme slate gray dne. also make global bg color zinc-950;. alos change  max-w-1/2 this fucks up aspect ratio ofhgdfjhnasdmd*/}
            <Card className="bg-slate-gray-950 text-zinc-300 max-w-7/12 justify-center">
          {/* could do h-[50%], but that adds some blank space below main card. idk */}
              <CardHeader>
                <CardTitle>about me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row gap-4 text-lg">
                  <AspectRatio ratio={23 / 9}>
                    <Image fill={true} src="/meirl2.jpg" alt="me smile" className="rounded-sm object-cover"/>
                  </AspectRatio>
                  <div className="flex flex-col gap-6">
                    <p>
                      Hi, my name is Logan Bjork. I'm currently a third year undergraduate student at the University of Florida interested in both software engineering and web development- primarily frontend.
                    </p>
                    <p>
                      Outside of programming, I enjoy playing guitar and bass, as well as weightlifting and calisthenics.
                    </p>
                    <div className="flex flex-row gap-6 justify-center items-end mt-auto">
                      <Button asChild size="icon" className="transition-shadow ease-in-out duration-100 hover:opacity-50 hover:shadow-lg shadow-blue-950">
                        <a href="https://github.com/loganjaymes" target="_blank">
                          <Image src="/ghub.svg" width={100} height={100} alt="git" />
                        </a>
                      </Button>
                      <Button asChild size="icon" className="transition-shadow ease-in-out duration-100 hover:opacity-50 hover:shadow-lg shadow-blue-950">
                        <a href="https://www.linkedin.com/in/loganbjork/" target="_blank">
                          <Image className="invert" src="/linkedin.svg" width={100} height={100} alt="linkedin" />
                        </a>
                      </Button>
                      <Button asChild size="icon" className="transition-shadow ease-in-out duration-100 hover:opacity-50 hover:shadow-lg shadow-blue-950">
                        <a href="/Logan_Bjork_Resume.pdf" target="_blank">
                          <Image className="invert" src="/dwn.svg" width={100} height={100} alt="resume download" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
                        
          {/* right cols */}
          <div className="flex flex-col gap-4">
            {/* stack card */}
            <div className="[perspective:600px]">
              <Card className="bg-slate-gray-950 text-zinc-300 h-fit">
                <CardHeader>
                  <CardTitle>languages & frameworks</CardTitle>
                </CardHeader>
                <CardContent className="flex w-fit gap-10 px-14">
                  <ul className="list-disc">
                    {/* maybe have each bullet be img representing tech. use globals.css for this https://stackoverflow.com/questions/21161569/html-list-with-different-images-as-bullets */}
                    <li>Raw HTML/CSS</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>C++</li>
                  </ul>
                  <ul className="list-disc">
                    <li>React</li>
                    <li>Next.JS</li>
                    <li>Svelte</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* contact */}
            <div className="[perspective:800px] flex-1 min-h-0">
              <Card className="bg-slate-gray-950 text-zinc-300 overflow-y-auto">
                <CardHeader>
                  <CardTitle>contact me</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col w-full">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </main>
  );
}
