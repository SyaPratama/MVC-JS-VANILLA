export default function nav() {
  return `
            <nav class="flex sticky top-0 items-center justify-between px-[4rem] bg-[rgba(0,0,0,.2)] h-[70px]">
                <div class="icon">
                   <span class="text-3xl text-[rgba(255,255,255,.4)] font-bold"><a href="#">MVC JS</a></span>
                </div>
                <div class="navigation flex gap-5">
                    <a href="#" class="text-[rgba(255,255,255,.4)] font-bold">Home</a>
                    <a href="#about" class="text-[rgba(255,255,255,.4)] font-bold">About</a>
                </div>
            </nav>
        `;
}
