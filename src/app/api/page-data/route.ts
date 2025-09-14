import { NextResponse } from 'next/server'
import {
  avatarList,
  brandList,
  innovationList,
  onlinePresenceList,
  creativeMindList,
  WebResultTagList,
  startupPlanList,
  faqList,
  achievementsList,
} from '@/app/data/page-data'

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};