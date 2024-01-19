/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/mzYlG00aL50
 */
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export function Inicio() {
  return (
    <div className="flex flex-col h-screen">
      <header className="h-16 flex items-center justify-between px-4 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">Monthly Budget</h1>
        <Button className="text-white border-white" variant="outline">
          Logout
        </Button>
      </header>
      <main className="flex-1 overflow-auto bg-gray-100 p-4">
        <div className="grid gap-6 md:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Income</CardTitle>
              <Button className="ml-auto" variant="outline">
                Add Item
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-2 items-center">
                  <div className="font-medium">Salary</div>
                  <div className="text-right col-span-2">$5000</div>
                </div>
                <div className="grid grid-cols-3 gap-2 items-center">
                  <div className="font-medium">Freelance</div>
                  <div className="text-right col-span-2">$2000</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Expenses</CardTitle>
              <Button className="ml-auto" variant="outline">
                Add Item
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-2 items-center">
                  <div className="font-medium">Rent</div>
                  <div className="text-right col-span-2">$1000</div>
                </div>
                <div className="grid grid-cols-3 gap-2 items-center">
                  <div className="font-medium">Groceries</div>
                  <div className="text-right col-span-2">$300</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Savings</CardTitle>
              <Button className="ml-auto" variant="outline">
                Add Item
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-2 items-center">
                  <div className="font-medium">Emergency Fund</div>
                  <div className="text-right col-span-2">$500</div>
                </div>
                <div className="grid grid-cols-3 gap-2 items-center">
                  <div className="font-medium">Vacation</div>
                  <div className="text-right col-span-2">$200</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Credit Card Expenses</CardTitle>
              <Button className="ml-auto" variant="outline">
                Add Item
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-2 items-center">
                  <div className="font-medium">Visa</div>
                  <div className="text-right col-span-2">$400</div>
                </div>
                <div className="grid grid-cols-3 gap-2 items-center">
                  <div className="font-medium">Mastercard</div>
                  <div className="text-right col-span-2">$350</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-2 items-center">
                  <div className="font-medium">Total Income</div>
                  <div className="text-right col-span-2">$7000</div>
                </div>
                <div className="grid grid-cols-3 gap-2 items-center">
                  <div className="font-medium">Total Expenses</div>
                  <div className="text-right col-span-2">$2050</div>
                </div>
                <div className="grid grid-cols-3 gap-2 items-center">
                  <div className="font-medium">Total Savings</div>
                  <div className="text-right col-span-2">$700</div>
                </div>
                <div className="grid grid-cols-3 gap-2 items-center">
                  <div className="font-medium">Net Total</div>
                  <div className="text-right col-span-2">$4950</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
export default Inicio;