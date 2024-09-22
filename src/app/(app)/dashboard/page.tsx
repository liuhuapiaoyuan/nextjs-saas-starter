'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { Counters } from './Counters'
import { AreaChartDemo } from './AreaChartDemo'
import { RecentSales } from './RecentSales'
import { BarChartDemo } from './BarChartDemo'
import { GradientLineChartDemo } from './GradientLineChartDemo'

export default function DashboardPage() {
  return (
    <div className='grid gap-5'>
      <div />
      <div className='flex items-center justify-between space-y-2'>
        <h2 className='text-3xl font-normal'>Hi，欢迎回来，王先生 👋</h2>
      </div>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Counters />
      </div>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7'>
        <div className='col-span-7'>
          <BarChartDemo />
        </div>
        <div className='col-span-4 md:col-span-4'>
          <AreaChartDemo />
        </div>
        <div className='col-span-4 md:col-span-3'>
          <GradientLineChartDemo />
        </div>

        <Card className='col-span-4 md:col-span-4'>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
        <Card className='col-span-4 md:col-span-3'>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
        <Card className='col-span-7'>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
