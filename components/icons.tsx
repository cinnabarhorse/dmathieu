import React from "react";

export function IconTemplate(boxSize: number, fillColor: string, d: string) {
    return (
        <svg id="svg-icon" fill={fillColor} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${boxSize} ${boxSize}`}>
            <g fill="none" fillRule="evenodd">
                <path fill={fillColor} d={d}></path>
            </g>

        </svg>
    )

}

export function DiscordSVG(boxSize: number, fillColor: string) {
    return (
        <svg width={boxSize} height={boxSize} fill-rule="evenodd" clip-rule="evenodd"><path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" /></svg>
    )
}

export function TwitterSVG(boxSize: number, fillColor: string) {

    return (

        <svg xmlns="http://www.w3.org/2000/svg" width={boxSize} height={boxSize} fill={fillColor} viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
    )
}

export function RedditSVG(boxSize: number, fillColor: string) {
    return (
        <svg width={boxSize} height={boxSize} viewBox="0 0 24 24"><path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z" /></svg>
    )
}

export function FacebookSVG(boxSize: number, fillColor: string) {

    return (

        <svg id="svg-icon" fill={fillColor} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${boxSize} ${boxSize}`}>
            <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
        </svg>

    )

}

export function faBarsSVG(boxSize: number, fillColor: string) {
    return (
        <svg width={boxSize} height={boxSize} viewBox="0 0 1792 1792" fill={fillColor} xmlns="http://www.w3.org/2000/svg"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" /></svg>
    )
}

export function KyberLogo(boxSize: number) {
    return (
        <svg width={boxSize} height={boxSize} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 67.05"><title>kyber-network-knc-logo</title><path fill="#31cb9e" d="M20,33.52L45,47.84a1.32,1.32,0,0,0,2-1.14V20.32a1.31,1.31,0,0,0-2-1.13Z" /><path d="M44.47,12.85L27.38,0.28A1.36,1.36,0,0,0,25.24,1L19,29,44.32,15a1.26,1.26,0,0,0,.15-2.15" fill="#31cb9e" /><path d="M27.36,66.75L44.47,54.18A1.28,1.28,0,0,0,44.33,52L19,38l6.24,28a1.35,1.35,0,0,0,2.12.77" fill="#31cb9e" /><path d="M13.5,33L20,2.6a1.29,1.29,0,0,0-2-1.31L1.35,14.06A3.45,3.45,0,0,0,0,16.81v32.4A3.45,3.45,0,0,0,1.35,52L17.92,64.73a1.29,1.29,0,0,0,2-1.31Z" fill="#31cb9e" /></svg>
    )
}

export function DGXLogo(boxSize: number) {
    return (
        <svg width={boxSize} height={boxSize} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.26 114.26"><defs></defs><title>dgx</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon id="ETH" fill="#c2a059" points="57.13 51.94 88.29 83.1 57.13 114.26 57.13 51.94" /><polygon id="ETH-2" fill="#e3c88e" points="57.13 51.94 57.13 114.26 25.97 83.1 57.13 51.94" /><polygon id="ETH-3" fill="#243961" points="57.13 0 57.13 41.55 20.77 77.9 0 57.13 57.13 0" /><polygon id="ETH-4" fill="#131f35" points="57.13 0 114.26 57.13 93.48 77.9 57.13 41.55 57.13 0" /></g></g></svg>
    )

}

export function WebsiteIcon(boxSize: number, fillColor: string) {
    return (
        <svg width={boxSize} fill={fillColor} height={boxSize} version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000">
            <g><path d="M500,990C229.4,990,10,770.6,10,500C10,229.4,229.4,10,500,10c270.6,0,490,219.4,490,490C990,770.6,770.6,990,500,990z M909.8,654.7H787.6c-38.6,123.4-126,224.6-239.5,280.5C714.5,917,852.6,806,909.8,654.7z M757.9,512.9c0-39.2-5.3-78.2-14.7-116.1H525.8v206.3h222.7C754.5,574,757.9,543.9,757.9,512.9z M474.2,654.7H270.6c37.7,99.5,111.2,192.9,204.2,242.6L474.2,654.7z M474.2,603.2V396.8H253.8c-7.6,33.8-11.7,68.4-11.7,103.2c0,35.6,4.3,70.1,12.3,103.2H474.2z M474.2,345.3V95.8c-94.6,53.6-168.3,141.3-205.5,249.4H474.2z M727.5,345.3C689.2,240.4,617.2,149.4,525.8,97v248.3H727.5z M525.8,654.7v249.2c97.6-52.8,173.1-141.7,209-249.2H525.8z M474.2,937.4v-9.5V937.4c-119.5-50.5-213.5-159.7-257.1-282.7H90.2C149.9,812.7,297.9,927.1,474.2,937.4z M74.7,395.2c-8.6,34.2-13.2,67.9-13.2,104.8c0,35.6,4.7,70,12.7,103.2h128.1c-7.6-33.2-11.9-67.6-11.9-103.2c0-34.8,4.2-69.3,11.5-103.2H87.4C82.9,396.8,78.4,397.3,74.7,395.2z M90.2,345.3h125.4c38.5-117.7,130.9-222.8,234.2-281.7C289.8,86.4,145.7,198.3,90.2,345.3z M545.4,64.5c108.2,55.9,193,160,235,280.8h129.4C852.3,193.2,713,81.8,545.4,64.5z M795.7,396.8c9,37.9,13.8,76.8,13.8,116.1c0,30.9-3.3,61-8.9,90.3h125.1c8-33.1,12.7-67.5,12.7-103.2c0-35.6-4.7-70-12.7-103.2H795.7z" /></g>
        </svg>
    )
}