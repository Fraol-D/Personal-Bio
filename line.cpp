#include <iostream.h>
#include <conio.h>
#include <stdlib.h>
#include <dos.h>

void moveLine(int startX, int startY, int length, int speed, int color)
{
  int direction = 1;
  int x = startX;
  while (!kbhit())
  {
    setcolor(color);
    line(x, startY, x + length, startY);
    delay(speed);
    setcolor(getbkcolor());
    line(x, startY, x + length, startY);
    x += direction;
    if (x <= startX || x >= getmaxx() - length)
    {
      direction *= -1;
    }
  }
}

int main()
{
  int gd = 0, gm;
  initgraph(&gd, &gm, "..\\bgi");
  int startX = 50;
  int startY = 100;
  int length = 50;
  int speed = 50; // Adjust speed as needed
  int color = 1;  // You can change the color here

  moveLine(startX, startY, length, speed, color);

  getch();
  closegraph();
  return 0;
}
