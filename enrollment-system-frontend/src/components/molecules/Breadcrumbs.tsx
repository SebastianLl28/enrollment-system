import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { Crumb } from "@/store/module.store";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (!items?.length) return null;
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <span key={i} className="flex items-center">
              <BreadcrumbItem>
                {last || !item.to ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={item.to}>{item.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!last && <BreadcrumbSeparator />}
            </span>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
