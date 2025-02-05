import _ from 'lodash'
import UserTrendChart from '../../components/e-charts/user-trend-chart/user-trend'
import DashboardTilesCard from '../../components/dashboard/dashboard-tiles-card'
import TopAgrisyncpers from '../../components/dashboard/top-agrisyncpers'
import TopServiceProviders from '../../components/dashboard/top-service-providers'
import UserCountChart from '../../components/e-charts/user-count-chart/user-count-chart'
import AgrisyncsAndWithdrawalsChart from '../../components/e-charts/agrisyncs-withdrawals-chart/agrisyncs-withdrawals-chart'
import UserAgeRangeChart from '../../components/e-charts/user-age-range-chart/user-age-range-chart'

function Main() {
  return (
    <div>
      <DashboardTilesCard />
      <div className="mt-[20px] flex flex-col gap-[20px] lg:flex-row">
        <div className="w-full lg:w-3/4">
          <div className="w-full">
            <UserTrendChart />
          </div>
        </div>
        <div className="sm:w-full lg:w-1/4">
          <UserCountChart />
        </div>
      </div>
      <div className="flex flex-col gap-[25px] lg:flex-row">
        <div className="flex w-full flex-col gap-[30px] md:flex-row lg:w-3/4">
          <div className="w-full md:w-1/2">
            <TopAgrisyncpers />
          </div>
          <div className="mb-[150px] w-full md:w-1/2">
            <TopServiceProviders />
          </div>
        </div>
        <div className="sm:w-full lg:w-1/4">
          <UserAgeRangeChart />
        </div>
      </div>
      <div className="w-full">
        <AgrisyncsAndWithdrawalsChart />
      </div>
    </div>
  )
}

export default Main
