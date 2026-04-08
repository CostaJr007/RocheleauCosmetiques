import React, { createContext, useContext, useState, ReactNode } from "react";

interface ReferralContextType {
  isUnlocked: boolean;
  referralCode: string;
  unlock: (code: string) => boolean;
  reset: () => void;
}

const VALID_CODES = ["ROCHE2026", "LEAU-VIP", "BEAUTY-INVITE", "LUXE100", "MEMBER-EXCLUSIVE"];

const ReferralContext = createContext<ReferralContextType>({
  isUnlocked: false,
  referralCode: "",
  unlock: () => false,
  reset: () => {},
});

export const useReferral = () => useContext(ReferralContext);

export const ReferralProvider = ({ children }: { children: ReactNode }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [referralCode, setReferralCode] = useState("");

  const unlock = (code: string) => {
    if (VALID_CODES.includes(code.toUpperCase())) {
      setIsUnlocked(true);
      setReferralCode(code.toUpperCase());
      return true;
    }
    return false;
  };

  const reset = () => {
    setIsUnlocked(false);
    setReferralCode("");
  };

  return (
    <ReferralContext.Provider value={{ isUnlocked, referralCode, unlock, reset }}>
      {children}
    </ReferralContext.Provider>
  );
};
