import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="wrap flex max-lg:flex-col items-center justify-between gap-4 lg:gap-10">
        <Logo className="w-[136px] fill-primary" />
        <p className="text-black/50 text-xl lg:ml-auto ">©2024 Clicky Marketing LTD</p>
        <a
          className="primary-gradient p-3 rounded-[10px] font-bold text-white "
          href="tel:+640211695214">
          021 169 5214
        </a>
      </div>
    </footer>
  );
}
