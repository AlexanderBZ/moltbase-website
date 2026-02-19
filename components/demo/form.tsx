"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Script from "next/script";

function DemoRequestForm() {
  return (
    <>
      {/* Cloudflare Turnstile */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
      />

      <form
        method="POST"
        action="/api/demo-request"
        className="flex w-full flex-col gap-6"
      >
        {/* Name */}
        <div className="flex flex-col gap-2 text-xs">
          <Label htmlFor="name" className="text-sm leading-tight">
            Full Name<span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Smith"
            required
          />
        </div>

        {/* Work Email */}
        <div className="flex flex-col gap-2 text-xs">
          <Label htmlFor="work_email" className="text-sm leading-tight">
            Work Email<span className="text-destructive">*</span>
          </Label>
          <Input
            id="work_email"
            name="work_email"
            type="email"
            placeholder="john@company.com"
            required
          />
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2 text-xs">
          <Label htmlFor="company" className="text-sm leading-tight">
            Company Name<span className="text-destructive">*</span>
          </Label>
          <Input
            id="company"
            name="company"
            type="text"
            placeholder="Acme Inc"
            required
          />
        </div>

        {/* Job Title */}
        <div className="flex flex-col gap-2 text-xs">
          <Label htmlFor="job_title" className="text-sm leading-tight">
            Job Title<span className="text-destructive">*</span>
          </Label>
          <Input
            id="job_title"
            name="job_title"
            type="text"
            placeholder="CEO"
            required
          />
        </div>

        {/* Team Size */}
        <div className="flex flex-col gap-2 text-xs">
          <Label htmlFor="team_size" className="text-sm leading-tight">
            Team Size
          </Label>
          <Input
            id="team_size"
            name="team_size"
            type="text"
            placeholder="e.g., 5, 10, 15"
          />
        </div>

        {/* Use case */}
        <div className="flex flex-col gap-2 text-xs">
          <Label htmlFor="use_case" className="text-sm leading-tight">
            What specific challenges are you looking to solve?
            <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="use_case"
            name="use_case"
            placeholder="Feature prioritization, idea validation, etc."
            className="min-h-[120px]"
            required
          />
        </div>

        {/* Turnstile widget */}
        <div
          className="cf-turnstile"
          data-theme="light"
          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        />

        {/* Submit */}
        <Button type="submit" className="h-10">
          Submit
        </Button>
      </form>
    </>
  );
}

export default DemoRequestForm;
