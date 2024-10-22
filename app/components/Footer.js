import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="wrap flex items-center justify-between gap-4 lg:gap-10">
        <Logo className="w-[136px] fill-primary" />
        <p className="text-black/50 text-xl ml-auto ">©2024 Clicky Marketing LTD</p>
        <a className="p-3 rounded-[10px] font-bold primary-gradient" href="tel:0800 249 203">
          0800 249 203
        </a>
      </div>
    </footer>
  );
}
