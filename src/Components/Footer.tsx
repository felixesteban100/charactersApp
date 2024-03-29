
function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-base-300 text-base-content sticky flex flex-col md:flex-row lg:flex-row justify-center md:justify-around lg:justify-around">
        <div>
          <span className="footer-title">Shortcuts</span>
          <div className="flex justify-center items-center gap-2 text-xl">
            {/* Press <kbd className="kbd kbd-lg">Ctrl</kbd> + <kbd className="kbd kbd-lg">ENTER</kbd> to search characters */}
            Press <kbd className="kbd kbd-lg">Enter</kbd> to search characters
          </div>
          <div className="flex justify-center items-center gap-2 text-xl">
            Press <kbd className="kbd kbd-lg">Ctrl</kbd> + <kbd className="kbd kbd-lg">z</kbd> to see the favorites.
          </div>
          <div className="flex justify-center items-center gap-2 text-xl">
            Press <kbd className="kbd kbd-lg">Ctrl</kbd> + <kbd className="kbd kbd-lg">x</kbd> to reset the filters.
          </div>
        </div>
      </footer>

      {/* <footer className="footer p-10 bg-base-300 text-base-content sticky flex flex-col md:flex-row lg:flex-row justify-center md:justify-around lg:justify-around">
        <div>
          <span className="footer-title">Featured</span>
          <div className="flex flex-col gap-2 justify-center align-middle">
            <a className="w-full" href="https://www.marvel.com">
              <img className="h-10 w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" alt="" loading="lazy" />
            </a>
            <a href="https://www.dc.com">
              <img className="h-10 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1200px-DC_Comics_logo.svg.png" alt="" loading="lazy" />
            </a>
            <a href="https://www.starwars.com">
              <img className="h-10 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="" loading="lazy" />
            </a>
            <a className="link link-hover mx-auto">And More...</a>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a href=""><svg className="fill-current hover:text-blue-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a href=""><svg className="fill-current hover:text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a href=""><svg className="fill-current hover:text-purple-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z" /></svg></a>
            <a href=""><svg className="fill-current hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </div>
      </footer> */}
      
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 justify-center">
        <div className="items-center grid-flow-col justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
          <p>Industries Ltd. <br />Providing reliable tech since 1992</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer