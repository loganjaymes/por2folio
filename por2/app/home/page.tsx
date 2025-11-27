"use client"
import { Analytics } from "@vercel/analytics/next"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
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

function play() {
  new Audio("/untitled.wav").play()
}

export default function Home() {
  return (
    <main className="flex flex-row row-start-2 items-center sm:items-start min-h-0 p-12 gap-10">
        {/* click */}
        <div className="flex flex-row gap-10 justify-center [perspective:1800px] min-h-0">
          <div className="[perspective:800px] flex-1 min-h-0">
            <Card className="bg-slate-gray-950 text-zinc-300">
              <CardHeader>
                <CardTitle>click me</CardTitle>
              </CardHeader>
              
              <CardContent className="flex flex-row">
                <div className="flex gap-6 justify-center items-end mt-auto">
                  <div className="flex flex-col gap-6">
                    <Button size="icon-lg" className="transition-shadow ease-in-out duration-100 hover:opacity-50 hover:shadow-lg shadow-blue-950">
                      <a href="/projects">
                        <Image src="/ico/proj.png" width={100} height={100} alt="projects" />
                      </a>
                    </Button>

                    <Button size="icon-lg" className="transition-shadow ease-in-out duration-100 hover:opacity-50 hover:shadow-lg shadow-blue-950">
                      <a href="/gallery">
                        <Image src="/ico/gallery.png" width={100} height={100} alt="projects" />
                      </a>
                    </Button>

                    <audio src="untitled.wav" preload="auto" />
                    <Button size="icon-lg" className="transition-shadow ease-in-out duration-100 hover:opacity-50 hover:shadow-lg hover:cursor-pointer shadow-blue-950" onClick={play}>
                      <Image src="/ico/maow.png" width={100} height={100} alt="meow"/>
                    </Button>
                  </div>

                  <div className="flex flex-col gap-6">
                    <Button asChild size="icon-lg" className="transition-shadow ease-in-out duration-100 hover:opacity-50 hover:shadow-lg shadow-blue-950">
                      <a href="https://github.com/loganjaymes" target="_blank">
                        <Image src="/ico/gitcol.png" width={100} height={100} alt="git" />
                      </a>
                    </Button>
                    <Button asChild size="icon-lg" className="transition-shadow ease-in-out duration-100 hover:opacity-50 hover:shadow-lg shadow-blue-950">
                      <a href="https://www.linkedin.com/in/loganbjork/" target="_blank">
                        <Image src="/ico/in.png" width={100} height={100} alt="linkedin" />
                      </a>
                    </Button>
                    <Button asChild size="icon-lg" className="transition-shadow ease-in-out duration-100 hover:opacity-50 hover:shadow-lg shadow-blue-950">
                      <a href="/Logan_Bjork_Resume.pdf" target="_blank">
                        <Image src="/ico/download.png" width={100} height={100} alt="resume download" />
                      </a>
                    </Button>
                  </div>
              </div>
              </CardContent>
            </Card>
          </div>

        {/* abt */}
          <Card className="bg-slate-gray-950 text-zinc-300 max-w-7/12 justify-center h-1/2">
            <CardHeader>
              <CardTitle>about me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-row gap-4 text-lg">
                <Image src="/meirl.webp" alt="me smile" className="rounded-sm object-cover w-[450px] h-[450px] max-w-[450px] max-h-[450px]" width={500} height={500}/>
                <div className="flex flex-col gap-6">
                  <h2>Hi, I'm Logan Bjork- a developer, illustrator, and designer.</h2>
                  <p>I'm currently an undergraduate at the University of Florida interested in software engineering, cybersecurity, and web development.</p>
                  <p>Outside of programming, I enjoy playing guitar and bass, illustrating and 3D modeling, as well as weightlifting and calisthenics.</p>
                </div>
              </div>
            </CardContent>
          </Card>
                        
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
    </main>
  );
}
