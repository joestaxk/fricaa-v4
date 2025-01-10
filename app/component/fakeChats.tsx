import { AnimatedTypewriterText } from "./typewriter"

export const FakeChats = ({ imgSrc, user, message, i }: any) => {
    return (
        <div
            className={`
                flex items-end flex-col gap-2 absolute z-10 
                ${(i + 1) % 2 == 0 ? "right-[5vh]" : "left-[-5vh]"}
                top-[6rem]
            `}
            style={{
                transform: `translateY(${(i * 5)}rem)`,
                width: '250px' // Fixed width to prevent overlap
            }}
        >
            <div className="bg-white/10 text-sm backdrop-blur-lg saturate-150 w-fit max-w-[200px] rounded-md py-3 px-2">
                <AnimatedTypewriterText
                    text={message}
                    speed={50}
                    className="text-white"
                />
            </div>
            <div className="flex text-sm items-center gap-2">
                <span>{user}</span>
                <img
                    src={imgSrc}
                    width={30}
                    height={30}
                    alt={user}
                    className="rounded-full"
                />
            </div>
        </div>
    )
}