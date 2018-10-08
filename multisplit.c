#include <stdio.h>
#include <string.h>
 
 //a asdf
void parse_sep__(const char *str, const char *const *pat, int len)
{
	int i, slen;
	while (*str != '\0') {
		for (i = 0; i < len || !putchar(*(str++)); i++) {
			slen = strlen(pat[i]);
			if (strncmp(str, pat[i], slen)) continue;
			printf("{%.*s}", slen, str);
			str += slen;
			break;
		}
	}
}
 
int main()
{
	const char *seps[] = { "==", "!=", "=" };
	parse_sep("a!===b=!=c", seps, 3);
 
	return 0;
}
