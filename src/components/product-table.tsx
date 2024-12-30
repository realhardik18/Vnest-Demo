import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const products = [
    {
      id: 1,
      name: "Advanced Data Analytics Course",
      popularity: 80,
      sales: "3.5k students",
    },
    {
      id: 2,
      name: "Introduction to AI & ML",
      popularity: 70,
      sales: "2.8k students",
    },
    {
      id: 3,
      name: "Interactive Math Quizzes",
      popularity: 55,
      sales: "2.0k students",
    },
    {
      id: 4,
      name: "Personalized Learning Dashboard",
      popularity: 40,
      sales: "1.3k students",
    },
  ];
  
  
  export function ProductTable() {
    return (
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Popularity</TableHead>
              <TableHead className="text-right">Sales</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${product.popularity}%` }}
                    />
                  </div>
                </TableCell>
                <TableCell className="text-right">{product.sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
  
  