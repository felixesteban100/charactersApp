import { ModalSettingsProps } from "../../types"

function ModalSettings({ theme, setTheme }: ModalSettingsProps) {
    const themes = ["mytheme1", "mytheme2", "mytheme3", "mytheme4", "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]

    return (
        <div>
            <div className="flex flex-col gap-2 rounded-md pt-2">
                <div tabIndex={0} className="collapse border bg-base-100 rounded-box border-primary">
                    <div className="collapse-title font-medium flex gap-2">
                        <svg className="fill-primary w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.73 29.73"><g><path d="M14.865,0C6.655,0,0,6.655,0,14.865c0,1.714,0.201,2.83,0.767,4.546c1.104,3.188,6.896-2.808,9.388,0.729 c2.492,3.535-5.62,6.64-0.18,8.764c2.475,0.601,3.175,0.826,4.89,0.826c8.21,0,14.865-6.654,14.865-14.864 C29.73,6.655,23.075,0,14.865,0z M22.077,4.955c1.694,0,3.069,1.17,3.069,2.614c0,1.442-1.375,2.613-3.069,2.613 c-1.695,0-3.07-1.171-3.07-2.613C19.007,6.125,20.381,4.955,22.077,4.955z M4.74,15.802c-1.695,0-3.069-1.171-3.069-2.614 s1.375-2.614,3.069-2.614c1.696,0,3.071,1.171,3.071,2.614S6.437,15.802,4.74,15.802z M8.335,9.784c-1.695,0-3.07-1.17-3.07-2.614 c0-1.444,1.375-2.614,3.07-2.614s3.07,1.17,3.07,2.614C11.405,8.614,10.03,9.784,8.335,9.784z M12.078,4.189 c0-1.443,1.374-2.615,3.07-2.615c1.694,0,3.068,1.172,3.068,2.615s-1.375,2.614-3.068,2.614 C13.452,6.803,12.078,5.632,12.078,4.189z M17.341,27.627c-1.696,0-3.069-1.17-3.069-2.613s1.375-2.613,3.069-2.613 c1.695,0,3.07,1.17,3.07,2.613S19.036,27.627,17.341,27.627z M23.48,23.155c-1.695,0-3.069-1.173-3.069-2.614 c0-1.443,1.374-2.614,3.069-2.614c1.694,0,3.069,1.171,3.069,2.614C26.55,21.982,25.176,23.155,23.48,23.155z M25.146,16.604 c-1.695,0-3.07-1.17-3.07-2.614s1.375-2.614,3.07-2.614s3.07,1.17,3.07,2.614S26.843,16.604,25.146,16.604z" /></g></svg>
                        <p className="text-primary text-xl font-bold">Theme</p>
                    </div>
                    <div className="collapse-content">
                        <div className="flex flex-col justify-center">
                            {
                                themes.map((currentTheme) => (
                                    <div key={currentTheme} data-theme={currentTheme} className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">{currentTheme}</span>
                                            {theme === currentTheme ?
                                                <input type="radio" name="radio-10" className="radio checked:bg-primary" defaultChecked />
                                                :
                                                <input onClick={() => setTheme(currentTheme)} type="radio" name="radio-10" className="radio checked:bg-primary" />
                                            }
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSettings