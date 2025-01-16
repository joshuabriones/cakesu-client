import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RecentOrders = () => {
  const recentSales = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: "+$1,999.00",
    },
    {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      amount: "+$39.00",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: "+$299.00",
    },
    {
      name: "William Kim",
      email: "will@email.com",
      amount: "+$99.00",
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      amount: "+$39.00",
    },
  ];

  return (
    <div className="flex-1">
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="divide-y divide-gray-200">
            {recentSales.map((sale) => (
              <li
                key={sale.name}
                className="py-4 flex justify-between items-center"
              >
                <div className="flex gap-2">
                  <img
                    src="https://scontent.fceb6-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s480x480&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeGoM15pUeGVFYVnMs54r8CbWt9TLzuBU1Ba31MvO4FTUCRleglTCoC0PneDbN27CiFk4Us6UnizyWrtWF-H6i6I&_nc_ohc=t7g1DMhtyCMQ7kNvgE98O-9&_nc_zt=24&_nc_ht=scontent.fceb6-1.fna&_nc_gid=AxBuwv_09vWEQqurrOsPRU_&oh=00_AYB5ZYSPlVBoCsA1kpqbIfYv9Xr5qsg7itVTsgPsxK1PTw&oe=679FA33A"
                    alt="user"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-900">
                      {sale.name}
                    </p>
                    <p className="text-sm text-gray-500">{sale.email}</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-lightorange">
                  {sale.amount}
                </p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentOrders;
