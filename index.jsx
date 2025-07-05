/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Nuh6918wEJd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="grid max-w-3xl gap-4 px-4 mx-auto lg:grid-cols-2 lg:gap-6 xl:gap-10">
      <div className="space-y-4 lg:col-span-2">
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12">
            <img
              src="/placeholder.svg"
              width="96"
              height="96"
              alt="Avatar"
              className="rounded-full"
              style={{ aspectRatio: "96/96", objectFit: "cover" }}
            />
          </Avatar>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Alice Johnson</h1>
            <p className="text-gray-500 dark:text-gray-400">Senior Software Engineer</p>
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          Passionate about building accessible and inclusive web experiences.
        </p>
      </div>
      <div className="space-y-4">
        <Card>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value="Alice Johnson" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" placeholder="Enter your bio" className="min-h-[100px]" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Recent Activity</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="flex items-center space-x-4">
              <CalendarIcon className="w-6 h-6" />
              <div className="grid items-center grid-rows-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">Scheduled a meeting</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center space-x-4">
              <MessageCircleIcon className="w-6 h-6" />
              <div className="grid items-center grid-rows-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">Sent a message</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">1 day ago</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}