import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-4 px-3 py-4 md:flex-row">
      <section className="flex-1 rounded-3xl border border-amber-100 bg-white/90 p-5 shadow-md shadow-amber-100">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-800">
          नागरिकबाट सरकारसम्म सीधा सन्देश
        </div>
        <h1 className="mt-3 text-xl font-semibold leading-tight text-slate-900 md:text-2xl">
          Rupandehi Samasya Portal
          <span className="block text-base font-normal text-slate-700">
            सडक, फोहोर, पानी, बिजुली – हरेक स्थानीय समस्या अब अनलाइन
          </span>
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          नागरिकले फोटो, लोकेशन र विवरणसहित उजुरी गर्न सक्ने, र सरकार समक्ष
          प्राथमिकताका साथ पुग्ने एकीकृत पोर्टल।
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            to="/report"
            className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-rose-300 hover:bg-rose-700"
          >
            + नयाँ समस्या रिपोर्ट
          </Link>
          <Link
            to="/feed"
            className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-900 hover:bg-amber-100"
          >
            सार्वजनिक बोर्ड हेर्नुहोस्
          </Link>
        </div>
        <ul className="mt-4 space-y-1 text-xs text-slate-600">
          <li>• नागरिकले अनामिक रूपमा पनि उजुरी गर्न सक्ने</li>
          <li>• समस्या समाधान भएपछि SMS-जस्तो नोटिफिकेशन र अंक</li>
          <li>• सक्रिय नागरिकको मासिक लिडरबोर्ड</li>
        </ul>
      </section>
      <section className="flex-1 space-y-3">
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-emerald-900">
            कसरी काम गर्छ?
          </h2>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-xs text-emerald-900/90">
            <li>समस्या देख्दा फोटो खिच्नुहोस्</li>
            <li>पोर्टलमा क्याटेगरी, लोकेशन र विवरण राख्नुहोस्</li>
            <li>अन्य नागरिकले अपभोट र कमेन्ट गर्न सक्छन्</li>
            <li>सम्बन्धित कार्यालयले समाधान गर्दै अपडेट गर्छ</li>
          </ol>
        </div>
        <div className="rounded-3xl border border-amber-100 bg-white/90 p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">
            सरकारी प्रयोगका लागि तयार
          </h2>
          <p className="mt-2 text-xs text-slate-600">
            एडमिन प्यानलबाट जिल्ला, नगरपालिका, वा वडास्तरका अधिकारीले उजुरी
            हेर्न, प्राथमिकता निर्धारण गर्न, समाधान रिपोर्ट अपलोड गर्न, र
            PDF रिपोर्ट डाउनलोड गर्न सक्छन्।
          </p>
        </div>
      </section>
    </main>
  );
};

export default Landing;
