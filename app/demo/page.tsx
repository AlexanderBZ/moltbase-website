import SlimHeader from "@/components/shared/slim-header";
import Image from "next/image";
import DemoForm from "@/components/demo/form";

export default async function DemoPage({
  searchParams,
}: {
  // Promise unwrap for edge runtime
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <SlimHeader />

      {/* Main content */}
      <div className="mt-8 flex flex-col items-center px-4 sm:px-12">
        <div className="flex w-full max-w-full flex-col gap-5 pb-4 sm:pb-12 md:max-w-[720px]">
          <div className="flex flex-col items-center gap-2">
            {/* Logo */}
            <div className="mb-3 flex justify-center">
              <Image
                src="/svgs/app-icon.svg"
                alt="Atlas View Icon"
                width={60}
                height={60}
                className="h-[50px] w-[50px] rounded-full"
              />
            </div>

            <h1 className="text-center text-2xl font-semibold">
              Request a Demo of Atlas View
            </h1>
            <p className="mb-8 text-center text-base text-muted-foreground">
              Tell us about your business needs and how Atlas View can help. Our
              team will contact you to schedule a personalized demo.
            </p>

            {error && (
              <p className="mb-6 rounded bg-destructive/10 p-4 text-sm text-destructive">
                {decodeURIComponent(error)}
              </p>
            )}
          </div>

          {/* Demo Request Form */}
          <DemoForm />
        </div>
      </div>
    </div>
  );
}
