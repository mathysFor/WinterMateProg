import { spaceGrotesk } from "@/lib/fonts";
import Button from "../ui/Button";
import { trackCTA } from "@/lib/track";
export const MenuMobile = ({ open, setOpen }) => {
  return (
    <div
      className={`md:hidden overflow-hidden transition-[max-height] duration-300
        ${open ? "max-h-72" : "max-h-0"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
        <nav className="flex flex-col gap-2 text-gray-700">
          <a
            href="#programme"
            className={`rounded-md px-3 py-2 hover:bg-black/5 ${spaceGrotesk.className} font-light`}
          >
            Programme
          </a>
          <a
            href="#pour-qui"
            className={`rounded-md px-3 py hover:bg-black/5 ${spaceGrotesk.className} font-light`}
          >
            Pour qui ?
          </a>

          <Button
            onClick={() => trackCTA("top_bar_mobile")}
            className={`w-full px-4 py-2 bg-[#008CFF]  ${spaceGrotesk.className} `}
          >
            Accéder au programme
          </Button>
        </nav>
      </div>
    </div>
  );
};
