import React from 'react'

export default function GitHub({ size = 24, className }: { size?: number; className?: string }) {
	return (
		<svg width={size} height={size} viewBox="0 0 27 27" className={className} xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.1312 3.07373C7.13065 3.07373 2.27051 8.0566 2.27051 14.2092C2.27051 19.1366 5.37883 23.2984 9.69702 24.7733C10.2401 24.8711 10.4432 24.5366 10.4432 24.2444C10.4432 23.9805 10.429 23.104 10.429 22.17C7.70084 22.687 6.99489 21.4901 6.77768 20.8635C6.65495 20.5431 6.12604 19.5548 5.66446 19.2909C5.28434 19.0823 4.74131 18.5665 5.65034 18.5523C6.50616 18.5393 7.11653 19.3604 7.32071 19.6938C8.29817 21.3783 9.85993 20.9058 10.4833 20.6126C10.5789 19.8893 10.8635 19.4016 11.1762 19.1236C8.75975 18.8456 6.23465 17.8855 6.23465 13.6259C6.23465 12.415 6.65495 11.4125 7.34787 10.6327C7.23926 10.3547 6.85914 9.21326 7.45647 7.68191C7.45647 7.68191 8.36551 7.38976 10.4432 8.82336C11.312 8.57357 12.2352 8.44758 13.1583 8.44758C14.0815 8.44758 15.0046 8.57248 15.8735 8.82336C17.95 7.37564 18.8602 7.68299 18.8602 7.68299C19.4575 9.21326 19.0774 10.3547 18.9688 10.6327C19.6606 11.4125 20.082 12.4009 20.082 13.6259C20.082 17.8985 17.5438 18.8456 15.1274 19.1236C15.5205 19.4711 15.8604 20.1402 15.8604 21.1839C15.8604 22.6729 15.8463 23.8697 15.8463 24.2466C15.8463 24.5376 16.0505 24.8863 16.5935 24.7744C18.7623 24.0184 20.6369 22.5969 21.95 20.7125C23.2811 18.8052 23.9939 16.535 23.9918 14.2092C23.9918 8.0566 19.1317 3.07373 13.1312 3.07373Z"
			/>
		</svg>
	)
}
