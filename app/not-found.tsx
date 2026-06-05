import Subheading from "./components/ui/Subheading";
import DefaultButton from "./components/ui/Button/defaultButton";
import OutlineButton from "./components/ui/Button/outlineButton";

export default function NotFound() {
  return (
    <section className="relative bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
            <div className="relative">
              <Subheading variant="default">Error 404</Subheading>
              <h1 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">
                Page Not <span className="text-red-600">Found.</span>
              </h1>
              <p>The page you are looking for does not exist or may have been moved. Let’s get you back to the right section.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <DefaultButton href="/">Go to Homepage</DefaultButton>
                <OutlineButton href="/services">Explore Services</OutlineButton>
              </div>
            </div>
      </div>
    </section>
  );
}
