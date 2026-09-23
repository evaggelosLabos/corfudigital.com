import React from "react";

export interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ title, subtitle, children, className = "" }: CardProps) => {
  return (
    <div className={`bg-white rounded-xl border border-slate-200 shadow-sm p-6 ${className}`}>
      {title && <h3 className="text-xl font-bold text-slate-900">{title}</h3>}
      {subtitle && <p className="text-sm text-slate-500 mt-1 mb-4">{subtitle}</p>}
      {children}
    </div>
  );
};
