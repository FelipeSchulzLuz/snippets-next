export const FormErrorMessage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <p className="mt-2 text-sm text-red-600">{children}</p>
    );
}