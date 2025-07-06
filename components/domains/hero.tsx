import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { SearchIcon } from "lucide-react";

const domainExtensions = [
  { name: ".com", price: "$9.99/year" },
  { name: ".org", price: "$11.99/year" },
  { name: ".shop", price: "$4.99/year" },
  { name: ".online", price: "$6.99/year" },
  { name: ".me", price: "$7.99/year" },
  { name: ".tech", price: "$3.99/year" },
];

export default function DomainHero() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
          <div className="text-center">
            <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl">
              Search for a domain name
            </h1>
            <p className="text-muted-foreground mt-3 text-md max-w-3xl mx-auto">
              Find the perfect domain name for your business or personal
              project. Whether you need a .com, .org, or any other extension, we
              have you covered. Start your search now and secure your online
              presence!
            </p>

            <div className="relative mx-auto mt-7 max-w-xl sm:mt-12">
              {/* Form */}
              <form>
                <div className="bg-background relative z-10 flex space-x-3 rounded-lg border p-3 shadow-lg">
                  <div className="flex-[1_0_0%]">
                    <Label htmlFor="article" className="sr-only">
                      Search article
                    </Label>
                    <Input
                      name="article"
                      className="h-full"
                      id="article"
                      placeholder="Search article"
                    />
                  </div>
                  <div className="flex-[0_0_auto]">
                    <Button size={"sm"}>
                      <SearchIcon />
                      <p>Search</p>
                    </Button>
                  </div>
                </div>
              </form>
              {/* End Form */}

              {/* SVG Element Top Right */}
              <div className="absolute end-0 top-0 hidden translate-x-20 -translate-y-12 md:block">
                <svg
                  className="h-auto w-16 text-orange-500"
                  width={121}
                  height={135}
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* SVG Element Bottom Left */}
              <div className="absolute start-0 bottom-0 hidden -translate-x-32 translate-y-10 md:block">
                <svg
                  className="h-auto w-40 text-cyan-500"
                  width={347}
                  height={188}
                  viewBox="0 0 347 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Domain Extension Cards */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-20 sm:grid-cols-3 lg:grid-cols-6 justify-center">
              {domainExtensions.map((ext) => (
                <Card key={ext.name} className="text-center p-3 cursor-pointer">
                  <CardContent className="flex flex-col items-center space-y-1 p-0">
                    <span className="text-lg font-semibold">{ext.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {ext.price}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
