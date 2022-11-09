import { useEffect } from "react"


const useTitle = (title) => {
    useEffect(() => {
        document.title = `TrustedGraphy- ${title}`
    }, [title])
}

export default useTitle; 