export const BurgerMobile = ({ open, setOpen }) => {
  return (
    <button
      type="button"
      aria-label="Ouvrir le menu"
      aria-expanded={open}
      onClick={() => setOpen(!open)}
      className="md:hidden inline-flex h-9 w-9 items-center justify-center cursor-pointer rounded-md border border-black/10"
    >
      <span className="sr-only">Menu</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        className={`${open ? "hidden" : "block"}`}
      >
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        className={`${open ? "block" : "hidden"}`}
      >
        <path
          d="M6 6l12 12M18 6l-12 12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};
