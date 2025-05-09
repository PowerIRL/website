import LegalNavigation from "@/components/legal/LegalNavigation";

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <section className="prose prose-invert prose-lg max-w-none">
        <LegalNavigation currentPage="disclaimer" />
        
        <h1 className="mt-16 text-3xl md:text-5xl font-bold text-white mb-6 relative inline-block">
          <span className="relative z-10">Disclaimer</span>
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]"></span>
        </h1>
        <p className="text-white font-medium">Last updated: April 1, 2025</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Interpretation</h2>
        <p className="text-white font-medium">The words with initial capital letters have meanings defined under the following conditions. These definitions shall apply regardless of whether they appear in singular or plural form.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Definitions</h2>
        <p className="text-white font-medium">For the purposes of this Disclaimer:</p>
        <ul className="text-white font-medium">
            <li><span className="font-semibold">Company</span> (referred to as either "the Company", "We", "Us" or "Our" in this Disclaimer) refers to SDS Nexus, LLC dba PowerIRL, 30 N Gould St Ste R, Sheridan, WY, 82801, USA.</li>
            <li><span className="font-semibold">Service</span> refers to the Website.</li>
            <li><span className="font-semibold">You</span> means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            <li><span className="font-semibold">Website</span> refers to PowerIRL, accessible from <a href="https://pwrirl.com" className="text-[#E20074] hover:text-[#E20074]/80">https://pwrirl.com</a></li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Disclaimer</h2>
        <p className="text-white font-medium">The information contained on the Service is for general information purposes only.</p>
        <p className="text-white font-medium">The Company assumes no responsibility for errors or omissions in the contents of the Service.</p>
        <p className="text-white font-medium">In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.</p>
        <p className="text-white font-medium">The Company does not warrant that the Service is free of viruses or other harmful components.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">External Links Disclaimer</h2>
        <p className="text-white font-medium">The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.</p>
        <p className="text-white font-medium">Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Errors and Omissions Disclaimer</h2>
        <p className="text-white font-medium">The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to ensure that the content of the Service is both current and accurate, errors can occur. Additionally, due to the changing nature of laws, rules, and regulations, there may be delays, omissions, or inaccuracies in the information contained on the Service.</p>
        <p className="text-white font-medium">The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Fair Use Disclaimer</h2>
        <p className="text-white font-medium">The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.</p>
        <p className="text-white font-medium">The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright Law.</p>
        <p className="text-white font-medium">If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Views Expressed Disclaimer</h2>
        <p className="text-white font-medium">The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer, or company, including the Company.</p>
        <p className="text-white font-medium">Comments published by users are their sole responsibility and users will take full responsibility, liability, and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserves the right to delete any comment for any reason whatsoever.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">No Responsibility Disclaimer</h2>
        <p className="text-white font-medium">The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice or services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal, or other competent advisers.</p>
        <p className="text-white font-medium">In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">"Use at Your Own Risk" Disclaimer</h2>
        <p className="text-white font-medium">All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose.</p>
        <p className="text-white font-medium">The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special, or similar damages, even if advised of the possibility of such damages.</p>
      </section>
    </div>
  );
} 