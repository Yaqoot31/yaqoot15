import { useState } from 'react';
import { Download, Smartphone, Share, PlusSquare, MoreVertical, X, WifiOff } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

interface PWAInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  isIOS: boolean;
}

export function PWAInstallGuideModal({ isOpen, onClose, isIOS }: PWAInstallModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/55 backdrop-blur-xs p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl bg-card text-card-foreground border border-border shadow-2xl p-6 pb-8 sm:pb-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-10 h-1.5 bg-muted-foreground/30 rounded-full mx-auto mb-5 sm:hidden" />

        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <img
              src="/pwa-192x192.png"
              alt="Yaqoot App Icon"
              referrerPolicy="no-referrer"
              className="w-14 h-14 rounded-2xl border border-border shadow-sm bg-white object-contain p-1"
            />
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Install Yaqoot App
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Add to your mobile home screen for instant full-screen access
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close install guide"
            className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-xl hover:bg-muted text-muted-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-3 text-sm text-muted-foreground">
          {isIOS ? (
            <div className="space-y-3 rounded-xl bg-muted/50 border border-border p-4">
              <div className="font-semibold text-foreground text-xs">
                iPhone & iPad (Safari)
              </div>
              <div className="flex items-start gap-3">
                <Share className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed">
                  1. Tap the <strong className="text-foreground">Share</strong> icon in the Safari toolbar.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <PlusSquare className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed">
                  2. Scroll down and tap <strong className="text-foreground">Add to Home Screen</strong>, then tap <strong className="text-foreground">Add</strong>.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3 rounded-xl bg-muted/50 border border-border p-4">
              <div className="font-semibold text-foreground text-xs">
                Android (Chrome) & Mobile Browsers
              </div>
              <div className="flex items-start gap-3">
                <MoreVertical className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed">
                  1. Open the browser menu (<strong className="text-foreground">⋮</strong>) in the top-right corner.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Smartphone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed">
                  2. Select <strong className="text-foreground">Install app</strong> or <strong className="text-foreground">Add to Home screen</strong> to launch with its app icon.
                </p>
              </div>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full min-h-[44px] rounded-xl bg-accent text-accent-foreground text-sm font-semibold hover:opacity-95 transition-opacity"
        >
          Got It
        </button>
      </div>
    </div>
  );
}

interface PWAInstallButtonProps {
  compact?: boolean;
  className?: string;
}

export function PWAInstallButton({ compact = false, className = '' }: PWAInstallButtonProps) {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const accepted = await install();
      if (!accepted) return;
    } else {
      setShowGuide(true);
    }
  };

  if (!isInstallable && !isIOS && compact) {
    // Keep desktop top bar minimalist unless Chromium prompt is ready or on iOS/mobile sheet
    return null;
  }

  return (
    <>
      <button
        type="button"
        onClick={handleInstallClick}
        className={
          className ||
          'inline-flex items-center justify-center gap-1.5 min-h-[40px] px-3 py-2 text-xs font-semibold rounded-xl border border-border bg-card hover:bg-muted text-foreground transition-colors whitespace-nowrap shrink-0'
        }
        aria-label="Install portfolio app"
      >
        <Download className="w-3.5 h-3.5 text-accent shrink-0" />
        <span>{compact ? 'App' : isInstallable ? 'Install App' : 'Get App'}</span>
      </button>

      <PWAInstallGuideModal
        isOpen={showGuide}
        onClose={() => setShowGuide(false)}
        isIOS={isIOS}
      />
    </>
  );
}

export function OfflineIndicator() {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      role="status"
      className="fixed bottom-16 lg:bottom-4 left-4 right-4 sm:right-auto z-50 flex items-center gap-2 rounded-xl bg-amber-600 px-3.5 py-2 text-xs font-medium text-white shadow-lg"
    >
      <WifiOff className="w-4 h-4 shrink-0" />
      <span>Offline Mode — Cached portfolio data active</span>
    </div>
  );
}
