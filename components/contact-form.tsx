"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};

    if (!name) next.name = "Please enter your name.";
    if (!email || !emailPattern.test(email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!message) next.message = "Please enter a message.";
    else if (message.length > 1500) {
      next.message = "Please shorten the message so it fits in an email draft.";
    }

    setErrors(next);
    setOpened(false);

    if (next.name || next.email || next.message) {
      const id = next.name
        ? "contact-name"
        : next.email
          ? "contact-email"
          : "contact-message";
      document.getElementById(id)?.focus();
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${name.replace(/[\r\n]+/g, " ")}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\r\nEmail: ${email}\r\n\r\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7"
    >
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className="h-11 px-3 text-base"
            placeholder="Your name"
          />
          {errors.name ? (
            <p id="contact-name-error" role="alert" className="text-sm text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className="h-11 px-3 text-base"
            placeholder="you@company.com"
          />
          {errors.email ? (
            <p id="contact-email-error" role="alert" className="text-sm text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-message">Message</Label>
          <Textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className="min-h-36 px-3 py-3 text-base"
            placeholder="Write a short message"
          />
          {errors.message ? (
            <p
              id="contact-message-error"
              role="alert"
              className="text-sm text-destructive"
            >
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" className="h-12 rounded-full px-6 text-base">
          Open email draft
        </Button>
        <p className="text-sm leading-6 text-muted-foreground">
          Opens your email app with this message addressed to {site.name}. Nothing
          is stored on this website.
        </p>
      </div>

      {opened ? (
        <p role="status" className="mt-4 text-sm leading-6 text-foreground">
          Your email app should open with this message ready to send. If it does
          not, email{" "}
          <a className="font-medium underline underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          directly.
        </p>
      ) : null}
    </form>
  );
}
