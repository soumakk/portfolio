import {
	SandpackCodeEditor,
	SandpackLayout,
	SandpackPreview,
	SandpackProvider,
} from '@codesandbox/sandpack-react'
import { sandpackDark } from '@codesandbox/sandpack-themes'

export default function Sandbox({ files }: { files: any }) {
	return (
		<SandpackProvider files={files} theme={sandpackDark} template="vanilla">
			<SandpackLayout style={{ flexDirection: 'column', minHeight: '800px' }}>
				<SandpackCodeEditor showTabs showRunButton wrapContent className="text-base" />
				<SandpackPreview />
			</SandpackLayout>
		</SandpackProvider>
	)
}
