'use client'

import { createContext, ReactNode, useCallback, useContext, useState } from "react"


export const ModalContext = createContext({
    showContactModal: false,
    handleChange: () => { },
    instituteName: '',
    setName: (name: string) => { }
})

export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
    const [showContactModal, setShowContactModal] = useState<boolean>(false);
    const [instituteName, setInstituteName] = useState<string>('')

    const handleChange = useCallback(() => {
        setShowContactModal(prev => !prev)
    }, []);

    const setName = (name: string) => {
        setInstituteName(name);
    }

    return (
        <ModalContext.Provider value={{ showContactModal, handleChange, setName, instituteName }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext);