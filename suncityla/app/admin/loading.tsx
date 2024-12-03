import { Skeleton, SVGSkeleton } from '@/components/Skeleton';


const LoadingSkeleton = () => (
    <>
        <table className="w-full caption-bottom border-2">
            <thead className="[&amp;_tr]:border-b border-2">
                <tr className="border-b transition-colors">
                    <th className="h-10 px-2 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[72px] max-w-full" />
                    </th>
                    <th className="h-10 px-2 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <div className="inline-flex items-center">
                            <Skeleton className="w-[152px] max-w-full" />
                            <SVGSkeleton className="lucide-arrow-up-down w-[24px] h-[24px]" />
                        </div>
                    </th>
                    <th className="h-10 px-2 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[112px] max-w-full" />
                    </th>
                    <th className="h-10 px-2 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[88px] max-w-full" />
                    </th>
                    <th className="h-10 px-2 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[40px] max-w-full" />
                    </th>
                    <th className="h-10 px-2 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[48px] max-w-full" />
                    </th>
                </tr>
            </thead>
            <tbody className="[&amp;_tr:last-child]:border-0">
                <tr className="border-b transition-colors">
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <span>
                            <Skeleton className="w-[128px] max-w-full" />
                        </span>
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <span>
                            <Skeleton className="w-[120px] max-w-full" />
                        </span>
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[168px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[72px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[16px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <div className="px-2 py-1">
                            <Skeleton className="w-[56px] max-w-full" />
                        </div>
                    </td>
                </tr>
                <tr className="border-b transition-colors">
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <span>
                            <Skeleton className="w-[136px] max-w-full" />
                        </span>
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <span>
                            <Skeleton className="w-[120px] max-w-full" />
                        </span>
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[152px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[40px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[16px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <div className="px-2 py-1">
                            <Skeleton className="w-[72px] max-w-full" />
                        </div>
                    </td>
                </tr>
                <tr className="border-b transition-colors">
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <span>
                            <Skeleton className="w-[80px] max-w-full" />
                        </span>
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <span>
                            <Skeleton className="w-[120px] max-w-full" />
                        </span>
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[120px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[64px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[16px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <div className="px-2 py-1">
                            <Skeleton className="w-[56px] max-w-full" />
                        </div>
                    </td>
                </tr>
                <tr className="border-b transition-colors">
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <span>
                            <Skeleton className="w-[88px] max-w-full" />
                        </span>
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <span>
                            <Skeleton className="w-[120px] max-w-full" />
                        </span>
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[48px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[64px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[16px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <div className="px-2 py-1">
                            <Skeleton className="w-[56px] max-w-full" />
                        </div>
                    </td>
                </tr>
                <tr className="border-b transition-colors">
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <span>
                            <Skeleton className="w-[96px] max-w-full" />
                        </span>
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <span>
                            <Skeleton className="w-[120px] max-w-full" />
                        </span>
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[16px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[40px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[16px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <div className="px-2 py-1">
                            <Skeleton className="w-[72px] max-w-full" />
                        </div>
                    </td>
                </tr>
                <tr className="border-b transition-colors">
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <span>
                            <Skeleton className="w-[112px] max-w-full" />
                        </span>
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <span>
                            <Skeleton className="w-[120px] max-w-full" />
                        </span>
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[56px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[80px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[16px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <div className="px-2 py-1">
                            <Skeleton className="w-[72px] max-w-full" />
                        </div>
                    </td>
                </tr>
                <tr className="border-b transition-colors">
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <span>
                            <Skeleton className="w-[88px] max-w-full" />
                        </span>
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <span>
                            <Skeleton className="w-[120px] max-w-full" />
                        </span>
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[48px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[64px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <Skeleton className="w-[16px] max-w-full" />
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                        <div className="px-2 py-1">
                            <Skeleton className="w-[72px] max-w-full" />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
);

const SandboxPreview = () => (
    <div className="flex justify-center w-full h-full p-10">
        <LoadingSkeleton />
    </div>
);

export default SandboxPreview;
