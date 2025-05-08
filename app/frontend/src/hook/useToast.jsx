import React from "react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "../components/ui/toast";

const ToastContext = React.createContext({});

export function ToastContextProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const toast = React.useCallback(
    ({ title, description, action, variant, ...props }) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((toasts) => [
        ...toasts,
        { id, title, description, action, variant, ...props },
      ]);
      return id;
    },
    [setToasts]
  );

  const dismiss = React.useCallback((id) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      <ToastProvider>
        {children}
        {toasts.map(({ id, title, description, action, variant, ...props }) => (
          <Toast key={id} variant={variant} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose onClick={() => dismiss(id)} />
          </Toast>
        ))}
        <ToastViewport />
      </ToastProvider>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
