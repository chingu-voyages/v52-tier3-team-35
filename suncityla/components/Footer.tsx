import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>v52-tier3-team-35 </p>
      <div className=" flex flex-row justify-between gap-32 mt-4">
        <div>
          <div className="devs">
            Developers:
            <div>
              <p>
                Isslem Ouederni #1:
                <a
                  href="https://github.com/isslemouederni"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{" "}
                /
                <a
                  href="https://linkedin.com/in/isslemouederni"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                Mariana Farcas #2:
                <a
                  href="https://github.com/marianafarcas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{" "}
                /
                <a
                  href="https://linkedin.com/in/marianafarcas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                Abdulsamad Yusuf:
                <a
                  href="https://github.com/abdulsamadyusuf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{" "}
                /
                <a
                  href="https://linkedin.com/in/abdulsamadyusuf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                Anna Veselova #4:
                <a
                  href="https://github.com/annaveselova"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{" "}
                /
                <a
                  href="https://linkedin.com/in/annaveselova"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                Albert Ngodi #5:
                <a
                  href="https://github.com/albertngodi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{" "}
                /
                <a
                  href="https://linkedin.com/in/albertngodi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                Fouad Tabbara #3:
                <a
                  href="https://github.com/fouadtabbara"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="links">
          <h3 className="font-bold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-blue-500 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-blue-500 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/bookings/new"
                className="text-blue-500 hover:underline"
              >
                Book Now
              </Link>
            </li>
            <li>
              <Link href="/admin" className="text-blue-500 hover:underline">
                Admin Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <p>Developed for chingu</p>
      </div>
    </footer>
  );
}
