import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-xl flex-col justify-center px-5 py-20 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
        This page is not on the site.
      </h1>
      <p className="mt-4 text-base leading-7 text-muted-foreground">
        The portfolio is a single page. Return to the introduction for Tehreem
        Farooq.
      </p>
      <Link
        href="/"
        className={cn(buttonVariants({ size: "lg" }), "mt-8 h-12 w-fit rounded-full px-6 text-base")}
      >
        Back to home
      </Link>
    </div>
  );
}
