"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface DomainExtension {
  id: string;
  extension: string;
  popularity: "high" | "medium" | "low";
  price: string;
  description: string;
  perks: string[];
}

export default function PopularDomainsSlider() {
  const domainExtensions: DomainExtension[] = [
    {
      id: ".com",
      extension: ".com",
      popularity: "high",
      price: "$12.99/year",
      description: "The most recognized and trusted domain extension.",
      perks: ["Global trust", "SEO-friendly", "Universal use"],
    },
    {
      id: ".org",
      extension: ".org",
      popularity: "high",
      price: "$9.99/year",
      description: "Popular with nonprofits and organizations.",
      perks: ["Credibility", "Global recognition", "Trusted identity"],
    },
    {
      id: ".net",
      extension: ".net",
      popularity: "medium",
      price: "$11.99/year",
      description: "Great for tech and network businesses.",
      perks: ["Tech branding", "Available options", "Reliable"],
    },
    {
      id: ".shop",
      extension: ".shop",
      popularity: "medium",
      price: "$4.99/year",
      description: "Perfect for eCommerce and online stores.",
      perks: ["Ecommerce-ready", "Modern appeal", "Available"],
    },
    {
      id: ".ai",
      extension: ".ai",
      popularity: "high",
      price: "$59.99/year",
      description: "Popular among AI startups and tech companies.",
      perks: ["Trendy", "Tech-focused", "Startup identity"],
    },
    {
      id: ".dev",
      extension: ".dev",
      popularity: "medium",
      price: "$14.99/year",
      description: "Great for developers and technical projects.",
      perks: ["Developer-friendly", "SSL by default", "Modern"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          Popular Domain Extensions
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Explore the most popular and valuable domain extensions used
          worldwide.
        </p>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {domainExtensions.map((ext) => (
            <CarouselItem
              key={ext.id}
              className="pl-2 sm:basis-1/2 md:pl-4 lg:basis-1/3"
            >
              <Card className="flex h-full flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl">{ext.extension}</CardTitle>
                  <CardDescription>{ext.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <div>
                    <p className="text-sm font-medium">Price:</p>
                    <p className="text-lg font-bold">{ext.price}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Perks:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {ext.perks.map((perk, idx) => (
                        <Badge
                          variant="secondary"
                          key={idx}
                          className="text-xs"
                        >
                          {perk}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">
                    Register Now
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-8 flex justify-center">
          <CarouselPrevious className="relative static mr-2 lg:absolute" />
          <CarouselNext className="relative static ml-2 lg:absolute" />
        </div>
      </Carousel>
    </div>
  );
}
