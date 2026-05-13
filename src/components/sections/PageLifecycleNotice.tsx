import { AlertBanner } from '@/components/ui/AlertBanner';
import type { PageLifecycle } from '@/lib/pageVisibility';
import { isPageArchived, isPageClosed, isPageHidden } from '@/lib/pageVisibility';

export function PageLifecycleNotice({ page }: { page: PageLifecycle }) {
  if (isPageHidden(page)) {
    return (
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-5xl bg-fenland-soft p-8 text-fenland-dark shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-fenland-purple">Page hidden</p>
            <h1 className="mt-4 text-4xl font-black">This page is not currently available</h1>
            <p className="mt-4 leading-8 text-fenland-dark/75">This page has been hidden by the club and is not shown as normal public content.</p>
          </div>
        </div>
      </section>
    );
  }

  if (isPageClosed(page) && page.closedMessage) {
    return <AlertBanner>{page.closedMessage}</AlertBanner>;
  }

  if (isPageArchived(page) && page.archiveMessage) {
    return <AlertBanner>{page.archiveMessage}</AlertBanner>;
  }

  return null;
}
