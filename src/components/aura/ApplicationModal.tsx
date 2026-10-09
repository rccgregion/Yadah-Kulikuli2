import React, { useState } from 'react';
import { useAura } from '../../context/AuraContext';
import { X, Upload, CheckCircle2, ArrowRight } from 'lucide-react';

export const ApplicationModal: React.FC = () => {
  const { isApplicationModalOpen, closeApplicationModal, applicationRole, showToast } = useAura();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [philosophyNote, setPhilosophyNote] = useState('');
  const [expectedComp, setExpectedComp] = useState<number>(
    applicationRole ? (applicationRole.compensationMin + applicationRole.compensationMax) / 2 : 150000
  );
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isApplicationModalOpen || !applicationRole) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      showToast(`Attached dossier: ${e.target.files[0].name}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      showToast('Please provide your name and email to proceed.');
      return;
    }

    setIsSubmitted(true);
    showToast(`Application for ${applicationRole.title} received.`);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFileName(null);
    setFullName('');
    setEmail('');
    setPortfolioUrl('');
    setPhilosophyNote('');
    closeApplicationModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-[#1F1914]/65 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl rounded-[32px] bg-[#FAF7F2] border border-stone-200/90 shadow-2xl p-6 sm:p-9 text-[#2A221B] z-10 max-h-[92vh] overflow-y-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-stone-200/60 pb-5">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C26E42]">
              Studio Cohort Candidacy
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#241D17] mt-0.5">
              Apply for {applicationRole.title}
            </h2>
          </div>

          <button
            onClick={handleClose}
            className="p-2.5 rounded-full bg-white hover:bg-stone-100 border border-stone-200 text-[#5C4D40] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSubmitted ? (
          /* Submission Confirmation Screen */
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E5D7C7]/50 text-[#C26E42] flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-[#241D17]">
              Portfolio Dossier Received
            </h3>
            <p className="text-sm text-[#695A4E] max-w-md mx-auto leading-relaxed">
              Thank you, {fullName}. Our design directors review each portfolio by hand in our Arts District studio. You will hear back within five business days.
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="aura-terracotta-btn px-6 py-2.5 rounded-full text-white text-xs font-medium cursor-pointer"
              >
                Return to Studio Showcase
              </button>
            </div>
          </div>
        ) : (
          /* Application Form */
          <form onSubmit={handleSubmit} className="py-6 space-y-5 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A6C60] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Julian Soren"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-stone-200 focus:outline-hidden focus:border-[#C26E42] text-[#241D17]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A6C60] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="soren@arch.design"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-stone-200 focus:outline-hidden focus:border-[#C26E42] text-[#241D17]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A6C60] mb-1.5">
                Online Portfolio / Architectural Dossier Link
              </label>
              <input
                type="url"
                placeholder="https://juliansoren.space or Behance / ReadCV"
                value={portfolioUrl}
                onChange={(e) => setPortfolioUrl(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white border border-stone-200 focus:outline-hidden focus:border-[#C26E42] text-[#241D17]"
              />
            </div>

            {/* Compensation Expectation Slider */}
            <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#7A6C60]">
                  Desired Compensation Expectation
                </label>
                <span className="font-bold font-sans text-sm text-[#C26E42] tabular-nums">
                  ${(expectedComp / 1000).toFixed(0)}K / year
                </span>
              </div>
              <input
                type="range"
                min={applicationRole.compensationMin}
                max={applicationRole.compensationMax}
                step={2500}
                value={expectedComp}
                onChange={(e) => setExpectedComp(Number(e.target.value))}
                className="w-full accent-[#C26E42] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#8E8074]">
                <span>Base ${(applicationRole.compensationMin / 1000).toFixed(0)}K</span>
                <span>Max ${(applicationRole.compensationMax / 1000).toFixed(0)}K</span>
              </div>
            </div>

            {/* Design philosophy prompt */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A6C60] mb-1.5">
                Spatial Philosophy Note
              </label>
              <textarea
                rows={3}
                placeholder="What draws you to working with natural minerals, circadian light, and biophilic stillness?"
                value={philosophyNote}
                onChange={(e) => setPhilosophyNote(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white border border-stone-200 focus:outline-hidden focus:border-[#C26E42] text-[#241D17] leading-relaxed"
              />
            </div>

            {/* File Upload Simulator */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A6C60] mb-1.5">
                Attach CV or Selected Plates (PDF, max 25MB)
              </label>
              <label className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-stone-300 hover:border-[#C26E42] bg-stone-50/50 hover:bg-stone-50 transition-colors cursor-pointer">
                <Upload className="w-6 h-6 text-[#8E8074] mb-2" />
                <span className="text-xs text-[#5C4D40] font-medium">
                  {fileName ? fileName : 'Click to select or drop portfolio PDF'}
                </span>
                <span className="text-[10px] text-[#8E8074] mt-0.5">
                  Architectural drawings, spatial mockups, material studies
                </span>
                <input
                  type="file"
                  accept=".pdf,.zip"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Actions */}
            <div className="pt-4 flex items-center justify-end gap-3 border-t border-stone-200/60">
              <button
                type="button"
                onClick={handleClose}
                className="px-5 py-2.5 rounded-full text-xs font-medium text-[#5C4D40] hover:bg-stone-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="aura-terracotta-btn flex items-center gap-2 px-7 py-3 rounded-full text-white text-xs font-medium cursor-pointer"
              >
                <span>Transmit Candidacy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
