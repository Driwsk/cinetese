'use client'

import { createContext } from "react";
import { useContext } from "react";

interface Toast {
    id: number;
    title: string;
    description: string;
    variant?: string; // Optional variant property
  }
  
  interface ToastProviderProps {
    children: React.ReactNode;
  }
  
  const ToastProviderProps: React.FC<ToastProviderProps> = ({ children }) => {
      return( 
        <>
        children
        </>
      )
  };

  const ToastContext = createContext<Toast[]>([]);
  
  export function ToastProvider({ children }: { children: React.ReactNode }) {
    const context = useContext(ToastContext);
    if (!context) {
      throw new Error('useToast must be used within a ToastProvider');
    }
    return (
      <>
        { children }
        { context.map((toast, index) => (
          <div key={index}>{ toast.title }</div>
        )) }
      </>
    );
  }
  
  export function useToast(): { showToast: (toast: Toast) => void } {
    const context = useContext(ToastContext);
    if (!context) {
      throw new Error('useToast must be used within a ToastProvider');
    }
    return {
      showToast: (toast: Toast) => {
        // Add the toast to the context array
        context.push(toast);
      }
    };
  }

