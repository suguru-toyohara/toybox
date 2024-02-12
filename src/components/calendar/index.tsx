'use client';
import { useState, useEffect } from "react";
import { Card, Tooltip } from "@mui/material";
import ActivityCalendar from "react-activity-calendar";
import { Activity, ThemeInput } from "@/types/calendar";

const theme: ThemeInput = {
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

export default function GithubActivityCalendar() {

  const [activity, setActivity] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // 非同期関数を呼び出してデータを取得
    const loadData = async () => {
      try {
        console.log("fetching...")
        const r = await fetch("/api/v1/github/get_activity")
        const data: Activity[] = await r.json(); // データを取得
        setActivity(data); // データを状態にセット
        console.log("fetched")
      } catch (error) {
        console.error('データの取得中にエラーが発生しました', error);
      } finally {
        setIsLoading(false); // ローディング状態の終了
      }
    };

    loadData();
  }, []); // 空の依存配列でコンポーネントのマウント時にのみ実行

  return (
    <Card className="rounded-lg p-6" style={{backgroundColor: "#000"}}>
      <ActivityCalendar 
        data={activity} 
        loading={isLoading} 
        theme={theme} 
        colorScheme="dark" 
        style={{ color: "#FFF"}}
        renderBlock={(block, activity) => (
          <Tooltip title={`${activity.date}: ${activity.count} contributions`} arrow>
            {block}
          </Tooltip>
        )}
      />
    </Card>
  );
}
