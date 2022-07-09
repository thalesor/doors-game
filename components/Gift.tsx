import Image from 'next/image';

interface IGiftProps {
    height: number | string;
    width: number | string;
    top: number | string;
    left: number | string;
    clickFn: () => void
}

export default function Gift(props: IGiftProps)
{
    const { width, height, top, left, clickFn } = props;
    return(
        <div style={{position: 'absolute', top: top, left: left}} onClick={()=> clickFn()}>
            <Image src="/gift-box.png" alt="Gift box" width={width} height={height} />
        </div>
    )
}