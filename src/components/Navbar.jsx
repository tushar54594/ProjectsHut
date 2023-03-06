const Navbar = () => {
  return (
    <nav
      aria-label="Site Nav"
      class="mx-auto flex max-w-3xl items-center justify-between p-4"
    >
      <a
        href="/"
        class="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white font-bold text-[1.3rem] "
      >
        ph.
      </a>

      <ul class="flex items-center gap-2  text-[1.3rem] text-white">
        <li class="hidden lg:block">
          <a class="rounded-lg px-3 py-2" href="/">
            {" "}
            Home{" "}
          </a>
        </li>

        <li>
          <a
            class="rounded-lg px-3 py-2"
            href="https://github.com/priyankarpal/ProjectsHut/blob/main/contributing.md"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Docs{" "}
          </a>
        </li>

        <li>
          <a
            class="inline-flex items-center gap-2 rounded-lg px-3 py-2"
            href="https://github.com/priyankarpal/ProjectsHut/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
